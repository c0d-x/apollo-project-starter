export default class CategoryTransformer {
  static transform(category) {
    return {
      id: category.id,
      name: category.name,
    };
  }
}
