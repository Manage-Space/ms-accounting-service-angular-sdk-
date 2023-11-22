/**
 * ManageSpace Accounting API
 * ManageSpace Accounting API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GeneralLedgerAccountType } from './generalLedgerAccountType';


export interface GeneralLedgerAccountResponse { 
    /**
     * General Ledger Account ID.
     */
    generalLedgerAccountId: string;
    type: GeneralLedgerAccountType;
    /**
     * General Ledger Account Title
     */
    title: string;
    /**
     * General Ledger Account Description
     */
    description: string;
}
export namespace GeneralLedgerAccountResponse {
}

