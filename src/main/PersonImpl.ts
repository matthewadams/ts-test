import Person from './Person'

export default class PersonImpl implements Person {
  name?: string

  constructor (name?: string) {
    this.name = name
  }
}
