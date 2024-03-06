import('@ckeditor/ckeditor5-image');
interface CKSourceType {
  Editor: (typeof import('@ckeditor/ckeditor5-editor-classic'))['ClassicEditor'];
  EditorWatchdog: (typeof import('@ckeditor/ckeditor5-watchdog'))['EditorWatchdog'];
}

declare const CKSource: CKSourceType;
