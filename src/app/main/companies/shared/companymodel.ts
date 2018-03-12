export interface CompanyModel {
    id?: string;
    permission?: string;
    imgpath?: string;
    name?: string;
    desc?: string;
    remark?: string;
    address?: string;
    tel?: string;
    fax?: string;
    cemail?: string;
    homelink?: string;
    fblink?: string;
    googlelink?: string;
}

export interface CustomerCompanyModel {
    id?: string;
    permission?:string; // visitor type: visitor, supplier, contractor, vip, civil
    imgpath?: string;
    name?: string;
    desc?: string;
    remark?: string;
    address?: string;
    tel?: string;
    fax?: string;
    cemail?: string; //support email
    homelink?: string;
    fblink?: string;
    googlelink?: string;
}