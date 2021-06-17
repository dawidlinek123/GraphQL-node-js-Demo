export const CacheControl = `
directive @cacheControl(
      maxAge: Int,
      scope: CacheControlScope
  ) on OBJECT | FIELD | FIELD_DEFINITION
   enum CacheControlScope {
      PUBLIC
      PRIVATE
  }`;
