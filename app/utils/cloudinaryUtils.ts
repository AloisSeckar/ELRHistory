// type cherry-picked from '@nuxtjs/cloudinary/dist/runtime/components/CldUploadWidget.vue'
type CldUploadWidgetPropsOptions = {
  sources?: Array<'local'>
  clientAllowedFormats?: Array<string>
  publicId?: string
  folder?: string
  maxFiles?: number
  maxFileSize?: number
  maxImageFileSize?: number
  maxImageHeight?: number
  maxImageWidth?: number
  text?: object
}

export function getCloudinaryOptions(folder: string) {
  const options: CldUploadWidgetPropsOptions = {
    sources: ['local'],
    clientAllowedFormats: ['jpg', 'jpeg', 'png', 'tiff', 'tif', 'gif'],
    publicId: Date.now().toString(),
    folder: `${useRuntimeConfig().public.cloudinary.folder}/${folder}`,
    maxFiles: 1,
    maxFileSize: 4000000,
    maxImageFileSize: 4000000,
    maxImageHeight: 2500,
    maxImageWidth: 2500,
  }

  if (useRuntimeConfig().public.lang === 'cs') {
    options.text = {
      en: {
        or: useT('admin.cloudinary.or'),
        menu: {
          files: useT('admin.cloudinary.files'),
        },
        local: {
          browse: useT('admin.cloudinary.browse'),
          dd_title_single: useT('admin.cloudinary.drag'),
        },
        queue: {
          title_uploading_with_counter: useT('admin.cloudinary.uploading'),
          title_processing_with_counter: useT('admin.cloudinary.processing'),
          done: useT('admin.cloudinary.done'),
        },
      },
    }
  }

  return options
}
