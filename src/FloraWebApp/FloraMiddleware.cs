using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FloraWebApp
{
    public class FloraMiddleware
    {
        private readonly RequestDelegate m_requestDelegate = null;
        private readonly ILogger m_logger = null;
        
        public FloraMiddleware(RequestDelegate requestDelegate, ILoggerFactory loggerFactory)
        {
            m_requestDelegate = requestDelegate;
            m_logger = loggerFactory.CreateLogger<FloraMiddleware>();
        }

        public async Task Invoke(HttpContext httpContext)
        {
            m_logger.LogInformation("Request comes, IP is: " + httpContext.Connection.RemoteIpAddress.ToString());
            await m_requestDelegate.Invoke(httpContext);
        }
    }

    public static class FloraApplicationBuilderExtensions
    {
        public static IApplicationBuilder UseMiddlewareX(this IApplicationBuilder appBuilder)
        {
            return appBuilder.UseMiddleware<FloraMiddleware>();
        }
    }
}
