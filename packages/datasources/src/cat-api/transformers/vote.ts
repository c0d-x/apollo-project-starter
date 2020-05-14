import { VoteEnum } from 'project-starter-datas/src/codegen/generated-models';
import { getEnumKey } from 'project-starter-datas/src/helpers/enum';

export default class VoteTransformer {
  static transform(vote) {
    if (!vote) {
      return null;
    }

    return {
      id: vote.id,
      createdAt: vote.created_at || null,
      imageId: vote.image_id || null,
      value: getEnumKey(VoteEnum, vote.value),
    };
  }
}
