import * as Yup from 'yup';

const BasicImageSchema = Yup.object().shape({
  page: Yup.number(),
  per_page: Yup.number(),
  prev_page: Yup.string().optional(),
  next_page: Yup.string().optional(),
  total_results: Yup.number(),
});

const PhotoSchema = Yup.object().shape({
  id: Yup.number(),
  width: Yup.number(),
  height: Yup.number(),
  url: Yup.string(),
  src: Yup.object({
    large: Yup.string(),
  }),
  alt: Yup.string(),
  blurredDataUrl: Yup.string().optional(),
});

export const ImagesSchemaWithPhotos = BasicImageSchema.shape({
  photos: Yup.array().of(PhotoSchema),
});
