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
import { RentalIncomeType } from './rentalIncomeType';


export interface RentalIncomeRuleResponse { 
    /**
     * Rental Income Rule ID
     */
    rentalIncomeRuleId: string;
    /**
     * General Ledger Account ID
     */
    generalLedgerAccountId: string;
    rentalIncomeType: RentalIncomeType;
}
export namespace RentalIncomeRuleResponse {
}

