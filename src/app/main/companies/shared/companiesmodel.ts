export interface CompaniesModel {
    id?: string;
    imgpath?: string;
    name?: string;
    address1?: string;
    address2?: string;
    country?: string;
    postal?: string;
    cemail?: string; // support email
    tel?: string;
    fax?: string;
    homelink?: string;
    permission?: string; // visitor type: visitor, supplier, contractor, vip, civil
}
