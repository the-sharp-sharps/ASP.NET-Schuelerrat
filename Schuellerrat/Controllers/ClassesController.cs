﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Schuellerrat.Controllers
{
    public class ClassesController : Controller
    {
        public IActionResult Index()
        {
            return this.View();
        }
    }
}
