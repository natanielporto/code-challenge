const checkTemperatures = (temperature, minimumTemperature) => {
  if (temperature < minimumTemperature) return <span>Too cold</span>;
  if (temperature > minimumTemperature) return <span>Too hot</span>;
  return <span>All good</span>;
}

export default checkTemperatures;