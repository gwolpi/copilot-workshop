namespace VehicleMagician.Models.Dto
{
    public class VehicleDto
    {
        public string Merk { get; set; }
        public string Kentekenplaat { get; set; }
        public string Brandstof { get; set; }
        public string Kleur { get; set; }
        public string VervaldatumApk { get; set; }

        public static VehicleDto CreateDto(Vehicle? vehicle)
        {
            if (vehicle == null)
            {
                return new VehicleDto();
            }
            VehicleDto vehicleDto = new VehicleDto
            {
            Merk = vehicle.merk, //todo leave this one add the rest
            Kentekenplaat = vehicle.kentekenplaat,
            Brandstof = vehicle.brandstof[0].brandstof_omschrijving,
            Kleur = vehicle.eerste_kleur,
            VervaldatumApk = vehicle.vervaldatum_apk
            };
            return vehicleDto;


        }
    }
}
