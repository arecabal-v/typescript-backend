import { Character } from '@context/star-wars/shared/domain/class/Character';

export abstract class CharacterRepository {
  abstract create(character: Character): Promise<void>
  abstract findById(id: string): Promise<Character>
}
