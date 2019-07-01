import { Typegoose, prop } from 'typegoose';

export class Choreography extends Typegoose {
  [index: string]: any;
  // region public static methods
  // endregion

  // region private static methods
  // endregion

  // region public members
  @prop({ required: true })
  public name: string = '';

  @prop({ required: true })
  public bpmnXML: string = '';

  @prop({ required: true })
  public dateSaved: Date = new Date();
  // endregion

  // region private members
  // endregion

  // region constructor
  // endregion

  // region public methods
  // endregion

  // region private methods
  // endregion

}

const ChoreographyModel = new Choreography().getModelForClass(Choreography);

export default ChoreographyModel;
