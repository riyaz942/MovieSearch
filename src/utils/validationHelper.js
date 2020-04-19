export function isTypeFaliure(type) {
  const re = /(FAILURE)$/;
  return re.test(type);
}

export function isTypeSuccess(type) {
  const re = /(SUCCESS)$/;
  return re.test(type);
}

export function isTypeRequest(type) {
  const re = /(REQUEST)$/;
  return re.test(type);
}
