const initFullProps = {
  menubar: "edit view format tools table help",
  formats: {
    tindent_format: { selector: "p", styles: { "text-indent": "40mm" } },
  },
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'editimage', 'wordcount'
  ],
  // toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
  toolbar: 'fullscreen preview | undo redo | sizeselect | fontselect |  fontsizeselect| bold italic backcolor | alignleft aligncenter alignright alignjustify tindent_bttn | tfecha_bttn | bullist numlist outdent indent | removeformat | wordcount | link image',
  // plugins: [
  //   'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
  //   'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
  //   'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
  // ],
  mobile: {
    theme: "mobile",
    toolbar: ["undo", "bold", "italic", "styleselect, restoredraft"],
  },
  contextmenu: " copy  wordcount",
  browser_spellcheck: true,
  language: "en",
  language_url: "/tinymce/langs/es.js",
  paste_data_images: false,
  branding: false,
  force_p_newlines: false,
  forced_root_block: "",
  setup: ({ editor }: { editor: any }) => {
    editor.ui.registry.addIcon(
      "calendar",
      '<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21px" height="21px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><rect x="23.333" y="50" width="12" height="8" style="stroke:#ff0000;stroke-width:2;fill:#ffffff"/><rect x="43.333" y="50" width="12" height="8" style="stroke:#000000;stroke-width:2;fill:#ffffff"/><rect x="63.333" y="50" width="12" height="8" style="stroke:#000000;stroke-width:2;fill:#ffffff"/><rect x="23.333" y="66.666" 0width="12" height="8" style="stroke:#000000;stroke-width:2;fill:#ffffff"/><rect x="43.333" y="66.666" width="12" height="8" style="stroke:#000000;stroke-width:2;fill:#ffffff"/><rect x="63.333" y="66.666" width="12" height="8" style="stroke:#000000;stroke-width:2;fill:#ffffff"/><path d="M83.333,16.666h-10V10h-6.666v6.667H33.333V10h-6.666v6.667h-10c-3.666,0-6.667,3.001-6.667,6.667v66.666h80V23.333 C90,19.667,86.999,16.666,83.333,16.666z M83.333,83.333H16.667v-40h66.666V83.333z M16.667,36.666V23.333h10V30h6.666v-6.667 h33.334V30h6.666v-6.667h10v13.333H16.667z"/></svg>'
    );
    editor.ui.registry.addButton("tfecha_bttn", {
      text: "",
      icon: "calendar",
      tooltip: "Inserta la fecha del día",
      onAction: function () {
        var d = new Date();
        var n = d.getDay();
        var fecha: string = d.toLocaleDateString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        editor.execCommand("mceInsertContent", false, fecha);
      },
    });
  },
  height: "800px",
}

export default initFullProps;
