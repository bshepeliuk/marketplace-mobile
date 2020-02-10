export default function changeBorderColor(
  { errors, touched },
  field,
) {
  let borderColor;
  if (errors[field] && touched[field]) {
    borderColor = { border: '2px solid rgba(241, 74, 74, 0.836)' };
  } else if (touched[field]) {
    borderColor = { border: '2px solid #349a89' };
  }

  return borderColor;
}
