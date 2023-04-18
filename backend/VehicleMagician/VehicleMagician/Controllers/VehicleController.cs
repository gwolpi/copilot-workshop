using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using VehicleMagician.Helper;
using VehicleMagician.Models;
using VehicleMagician.Models.Dto;

namespace VehicleMagician.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VehicleController : ControllerBase
    {
        private readonly ILogger<VehicleController> _logger;
        private readonly HttpClient _httpClient;
        private const string key = "";
        private const string BaseUrl = "https://api.overheid.io/voertuiggegevens";


        public VehicleController(ILogger<VehicleController> logger, IHttpClientFactory httpClientFactory)
        {
            _logger = logger;
            _httpClient = httpClientFactory.CreateClient();

        }

        /// <summary>
        /// Validate the license plate using regex (see LicensePlateValidator.cs)
        /// Make a call to the external api using the BaseURL/LicensePlate,
        /// add api key to header ovio-api-key
        /// deserialize the response to a Vehicle object
        /// convert to dto (see dto)
        /// EXAMPLE: G-936-BB
        /// </summary>
        /// <param name="licensePlate"></param>
        /// <returns></returns>
        [HttpGet(Name = "GetVehicle")]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(VehicleDto), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get(string licensePlate)
        {
            //validate license plate
            string message;
            if (!LicensePlateValidator.IsValid(licensePlate))
            {
                message = $"Invalid license plate: {licensePlate}";
                _logger.LogError(message);
                return BadRequest(message);
            }

            var apiUrl = $"{BaseUrl}/{licensePlate}";
            var request = new HttpRequestMessage(HttpMethod.Get, apiUrl);
            request.Headers.Add("ovio-api-key", key);
            var response = await _httpClient.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var vehicle = JsonSerializer.Deserialize<Vehicle>(content);
                //convert vehicle to DTO
                return Ok(VehicleDto.CreateDto(vehicle));

            }

            message = $"Error fetching vehicle data for license plate: {licensePlate}";
            _logger.LogError(message);
            return BadRequest();
        }
    }
}
