import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useRef } from "react";

const FlyToDistrict = ({ district }) => {
  const map = useMap();

  useEffect(() => {
    if (!district) return;

    map.flyTo(
      [district.latitude, district.longitude],
      10,
      {
        animate: true,
        duration: 2, // smooth zoom
      }
    );
  }, [district, map]);

  return null;
};

const ResizeFix = () => {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }, [map]);

  return null;
};

const CoverageMap = ({ coverageData, selectedDistrict }) => {
  const popupRefs = useRef({});
  const mapRef = useRef(null);

  useEffect(() => {
    if (!selectedDistrict) return;
    if(!mapRef.current) return;
    const popup = popupRefs.current[selectedDistrict.district];
    if (popup) popup.openOn(popup._map);
  }, [selectedDistrict]);

  return (
    <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[23.685, 90.3563]}
        zoom={7}
        scrollWheelZoom={false}
        className="h-full w-full"
        whenCreated = {(map)=>{
          mapRef.current = map;
        }}
      >
        <ResizeFix />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FlyToDistrict district={selectedDistrict} />

        {coverageData.map(item => (
          <Marker
            key={item.district}
            position={[item.latitude, item.longitude]}
          >
            <Popup ref={ref => (popupRefs.current[item.district] = ref)}>
              <div>
                <h3 className="font-bold">{item.district}</h3>
                <p><b>Region:</b> {item.region}</p>
                <p><b>City:</b> {item.city}</p>
                <p><b>Covered Areas:</b></p>
                <ul className="list-disc list-inside">
                  {item.covered_area.map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
                </ul>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CoverageMap;
