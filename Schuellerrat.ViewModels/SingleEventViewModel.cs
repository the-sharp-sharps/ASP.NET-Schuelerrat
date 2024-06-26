﻿namespace Schuellerrat.ViewModels
{
    using System.Collections.Generic;

    public class SingleEventViewModel : SingleContentViewModel
    {
        public SingleEventViewModel()
        {
            this.ParagraphIds = new HashSet<int>();
            this.ParagraphTexts = new HashSet<string>();
            this.ParagraphTitles = new HashSet<string>();
            this.Images = new HashSet<ImageViewModel>();
        }

        public string EventDate { get; set; }
    }
}
