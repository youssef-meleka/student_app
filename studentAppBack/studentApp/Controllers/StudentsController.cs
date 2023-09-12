using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using studentApp.Models;
using System.Linq;
using System.Net;
using ExcelDataReader;



namespace studentApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly List<Student> _students;

        public StudentsController()
        {
            _students = new List<Student>();
        }

        [HttpGet]
        public IEnumerable<Student> GetStudents()
        {
            return _students;
        }

        [HttpPost]
        public void AddStudent(Student student)
        {
            _students.Add(student);
        }

        //public IActionResult DownloadExcel()
        //{
        //    var stream = new MemoryStream();
        //    var workbook = new ExcelWorkbook();
        //    var sheet = workbook.Worksheets.Add("Students");

        //    for (var student of _students)
        //    {
        //        var row = sheet.Rows.Add();
        //        row.Cells[0].Value = student.FirstName;
        //        row.Cells[1].Value = student.LastName;
        //        row.Cells[2].Value = student.StudentPhoto;
        //        row.Cells[3].Value = student.Note;
        //    }

        //    workbook.SaveAs(stream);

        //    return File(stream, "application/vnd.ms-excel");

        //}


    }
}
