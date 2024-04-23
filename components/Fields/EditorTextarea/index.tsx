import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const EditorTextarea: React.FC = () => {

  const [text, setText] = useState<string>("");


  return (
    <>
      <Editor
        id="Editor"
        apiKey="gthcrgn3ztfz5tquigz2cnbedj4zly7drpiz2cfi8v75ircb"
        init={{
          menubar: "edit view format tools table help",
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'editimage', 'wordcount'
          ],
          toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
          mobile: {
            theme: "mobile",
            toolbar: ["undo", "bold", "italic", "styleselect, restoredraft"],
          },
          contextmenu: " copy  wordcount",
        }}
        onEditorChange={setText}
      />
    </>
  )
}

export default EditorTextarea