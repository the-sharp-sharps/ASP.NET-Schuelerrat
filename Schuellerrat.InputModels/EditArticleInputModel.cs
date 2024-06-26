﻿namespace Schuellerrat.InputModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using Microsoft.AspNetCore.Http;
    using Models;

    public class EditArticleInputModel
    {
        public EditArticleInputModel()
        {
            this.Images = new List<IFormFile>();
            this.OldImages = new List<Image>();
            this.Paragraphs = new List<ParagraphInputModel>();
            this.ParagraphTitles = new List<string>();
            this.ParagraphTexts = new List<string>();
        }

        public int Id { get; set; }

        [MinLength(5)]
        [Required]
        public string Title { get; set; }

        public ICollection<Image> OldImages { get; set; }

        [DataType(DataType.Upload)]
        public ICollection<IFormFile> Images { get; set; }

        public ICollection<ParagraphInputModel> Paragraphs { get; set; }

        public ICollection<string> ParagraphTitles { get; set; }

        public ICollection<string> ParagraphTexts { get; set; }
    }
}
