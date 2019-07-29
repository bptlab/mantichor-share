import { prop, Typegoose } from 'typegoose';
import Mapping from '@/interfaces/Mapping';

export class Instance extends Typegoose {
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

  @prop({ required: true })
  public address: string = '';

  @prop({ required: true })
  public mappings: Mapping[] = [];
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

const InstanceModel = new Instance().getModelForClass(Instance);

export default InstanceModel;
