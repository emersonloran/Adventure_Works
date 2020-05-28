namespace QyonAdventureWorks.Api.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class HelloController : ControllerBase
    {
        private readonly ILogger<HelloController> _logger;

        public HelloController(ILogger<HelloController> logger)
        {
            _logger = logger;
        }
        
        /// <summary>
        /// Get Hello from Qyon Adventure Works
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     GET ...
        ///     {}
        ///
        /// </remarks>
        /// <returns>A message from Qyon API.</returns>
        /// <response code="200">A message from Qyon API.</response>
        [HttpGet]
        public IActionResult Get()
        {
            
            return Ok("Hello from Qyon Adventure Works");
        }
    }
}