/**
 * ManageSpace Accounting API
 * ManageSpace Accounting API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface CreateGeneralLedgerLineItemRequest { 
    /**
     * Credit Amount in the lowest demonination of the currency
     */
    creditAmount?: number | null;
    /**
     * Debit Amount in the lowest demonination of the currency
     */
    debitAmount?: number | null;
    /**
     * The id of the General Ledger Account
     */
    generalLedgerAccountId: string;
    /**
     * The id of the Custom General Ledger Account
     */
    customGeneralLedgerAccountId?: string | null;
    /**
     * The currency of the line item
     */
    currency: string;
}
