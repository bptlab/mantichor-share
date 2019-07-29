import { Typegoose, prop } from 'typegoose';

export class Model extends Typegoose {
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

const ModelModel = new Model().getModelForClass(Model);

export default ModelModel;
