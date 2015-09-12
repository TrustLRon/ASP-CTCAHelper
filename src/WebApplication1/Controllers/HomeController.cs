using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult CTCAInfo()
        {
            ViewData["Message"] = "Information about CTCA Scans.";

            return View();
        }

        public IActionResult ScanTips()
        {
            ViewData["Message"] = "Tips for getting great CTCA Scans.";

            return View();
        }

        public IActionResult CascoreTips()
        {
            ViewData["Message"] = "Tips for getting great Calcium Scores.";

            return View();
        }

        public IActionResult WorkupTips()
        {
            ViewData["Message"] = "Tips for great work-ups on the Vitrea Console.";

            return View();
        }

        public IActionResult Walkthrough()
        {
            ViewData["Message"] = "A step by step walkthrough of CTCA Scans.";

            return View();
        }

        public IActionResult BMI()
        {
            ViewData["Message"] = "Enter patient height and weight to calculate BMI.";

            return View();
        }

        public IActionResult DLP()
        {
            ViewData["Message"] = "Enter DLP to calculate patient dose.";

            return View();
        }

        public IActionResult NewScan()
        {
            ViewData["Message"] = "Enter details for new scan.";

            return View();
        }

        public IActionResult Help()
        {
            ViewData["Message"] = "Help with CTCA Scans.";

            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "About this Web App.";

            return View();
        }

        public IActionResult Error()
        {
            return View("~/Views/Shared/Error.cshtml");
        }
    }
}
