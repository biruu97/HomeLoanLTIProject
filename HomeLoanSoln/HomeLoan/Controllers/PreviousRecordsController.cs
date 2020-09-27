using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HomeLoan.Models;
using System.Web.Http.Cors;

namespace HomeLoan.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class PreviousRecordsController : ApiController
    {
        homeloanEntities1 hle = new homeloanEntities1();

        public List<application> Post(login user)
        {
            List<application> records = new List<application>();

            login applicant = new login();
            applicant = user;
            long id = user.id;
            foreach (var app in hle.applications.ToList())
            {
                if (app.loginid == id)
                    records.Add(app);
            }
            return records;
        }
    }
}
