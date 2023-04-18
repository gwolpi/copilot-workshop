using System.Text.RegularExpressions;
namespace VehicleMagician.Helper
{
    public class LicensePlateValidator
    {
       
        public static bool IsValid(string licensePlate)
        {
            //validate a Dutch licenseplate using regex
            //license plate format should have 8 characters and two dashes
            //valid formats:
            //99-XX-XX,
            // X-999-XX
            
            //invalid formats:
            //999-XX-XX,
            //XX9999XX,
            
            //regex pattern
            string pattern = @"^([A-Z0-9]{2})-([A-Z0-9]{2})-([A-Z0-9]{2})$|^([A-Z0-9]{1})-([A-Z0-9]{3})-([A-Z0-9]{2})$";
            Regex regex = new Regex(pattern);

            return regex.IsMatch(licensePlate);
        }
    }
}
