import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";
/** this class renders a list of users which are
 *  passed in which transforms the model
 *  based on the render function in CollectionViews.ts
 *  and Views.ts
 *  renderItem is the implementation of an abstract fu