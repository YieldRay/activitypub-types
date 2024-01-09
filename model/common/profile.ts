import { DescribesField } from '../../fields/index.ts'
import { APObject } from './object.ts'

export interface APProfile extends APObject {
    /**
     * On a Profile object, the describes property identifies
     * the object described by the Profile.
     *
     * {@link https://www.w3.org/ns/activitystreams#describes Docs}
     */
    describes?: DescribesField
}
