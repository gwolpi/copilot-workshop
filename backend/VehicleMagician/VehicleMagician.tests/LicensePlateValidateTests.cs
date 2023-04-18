using VehicleMagician.Helper;
using Xunit;
namespace VehicleMagician.tests;

public class LicensePlateValidateTests
{
    //Test the IsValid method from the LicensePlateValidator class
    //use multiple test cases
    //use the theory attribute
    //use the InlineData attribute
    //use the Assert.True and Assert.False methods
    [Theory]
    [InlineData("99-XX-XX")]
    [InlineData("X-999-XX")]
    [InlineData("999-XX-XX")]
    [InlineData("XX9999XX")]
    public void IsValid(string licensePlate)
    {
        //Arrange
        //Act
        var result = LicensePlateValidator.IsValid(licensePlate);
        //Assert
        if (licensePlate == "99-XX-XX" || licensePlate == "X-999-XX")
        {
            Assert.True(result);
        }
        else
        {
            Assert.False(result);
        }
    }
    
    
    
    
}
