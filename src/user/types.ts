type PlatformRole = {
  type: "platform-admin";
};
type AdminRole = {
  type: "account-admin";
  accountId: string;
};
type ReviewerRole = {
  type: "reviewer";
  accountId: string;
};
type ContractorRole = {
  type: "contractor";
  primaryReviewerId: string;
  secondaryReviewerId: string;
  accountId: string;
};
export type Role = PlatformRole | AdminRole | ReviewerRole | ContractorRole;
