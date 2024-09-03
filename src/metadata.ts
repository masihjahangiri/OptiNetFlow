/* eslint-disable */
export default async () => {
    const t = {
        ["./users/models/user.model"]: await import("./users/models/user.model")
    };
    return { "@nestjs/swagger/plugin": { "models": [], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String }, "getHelloName": { type: String } } }]] }, "@nestjs/graphql/plugin": { "models": [[import("./common/models/base.model"), { "BaseModel": { id: {}, createdAt: {}, updatedAt: {} } }], [import("./brand/models/brand.model"), { "Brand": { domainName: {}, title: {}, description: {}, botToken: {}, botUsername: {}, reportGroupId: { nullable: true }, backupGroupId: { nullable: true }, activeServerId: { nullable: true } } }], [import("./package/models/package.model"), { "Package": { traffic: {}, expirationDays: {}, price: {}, userCount: {} } }], [import("./telegram/models/telegramUser.model"), { "TelegramUser": { chatId: { nullable: true }, firstname: { nullable: true }, lastname: { nullable: true }, phone: { nullable: true }, username: { nullable: true }, bigAvatar: { nullable: true }, smallAvatar: { nullable: true } } }], [import("./users/models/user.model"), { "ParentTelegram": { username: { nullable: true } }, "BankCard": { name: {}, number: {} }, "UserGift": { giftPackage: { nullable: true }, isGiftUsed: {} }, "Parent": { id: {}, telegram: { nullable: true }, bankCard: { nullable: true } }, "User": { phone: {}, fullname: {}, role: {}, balance: {}, profitBalance: {}, totalProfit: {}, parentId: { nullable: true }, brandId: { nullable: true }, referId: { nullable: true }, isDisabled: { nullable: true }, isParentDisabled: { nullable: true }, telegram: { nullable: true }, brand: { nullable: true }, parent: { nullable: true }, maxRechargeDiscountPercent: { nullable: true }, bankCard: { nullable: true }, profitPercent: {}, initialDiscountPercent: { nullable: true }, appliedDiscountPercent: { nullable: true }, userGift: { nullable: true } }, "Child": { activePackages: {}, onlinePackages: {}, description: { nullable: true }, lastConnectedAt: { nullable: true } } }], [import("./minio/minio.model"), { "Media": { id: {}, url: {}, file_path: {}, file_format: {}, max_width: { nullable: true }, created_by: {}, upd_by: {}, creation: {}, last_upd: {} }, "File": { id: {}, url: {}, file_path: {}, file_format: {}, file_name: {}, created_by: {}, upd_by: {}, creation: {}, last_upd: {} } }], [import("./xui/dto/getClientStatsFilters.input"), { "GetClientStatsFiltersInput": { id: {} } }], [import("./xui/models/clientStat.model"), { "ClientStat": { total: {}, up: {}, down: {}, email: {}, enable: {}, expiryTime: {} } }], [import("./users/dto/change-password.input"), { "ChangePasswordInput": { oldPassword: {}, newPassword: {} } }], [import("./users/dto/update-user.input"), { "UpdateUserInput": { fullname: { nullable: true }, phone: { nullable: true }, password: { nullable: true }, cardBandNumber: { nullable: true }, cardBandName: { nullable: true } } }], [import("./users/dto/updateChild.input"), { "UpdateChildInput": { childId: {}, fullname: { nullable: true }, phone: { nullable: true }, password: { nullable: true }, isDisabled: { nullable: true }, role: { nullable: true }, description: { nullable: true } } }], [import("./auth/dto/signup.input"), { "SignupInput": { fullname: {}, phone: {}, password: {}, promoCode: { nullable: true }, domainName: {} } }], [import("./auth/models/token.model"), { "Token": { accessToken: {}, refreshToken: {} } }], [import("./auth/models/login.model"), { "LoginData": { tokens: {}, user: {} }, "Login": { loggedIn: { nullable: true }, isPromoCodeValid: { nullable: true } } }], [import("./auth/dto/login.input"), { "LoginInput": { phone: {}, password: {}, domainName: {} } }], [import("./auth/dto/refresh-token.input"), { "RefreshTokenInput": { token: {} } }], [import("./auth/models/auth.model"), { "Auth": { user: { type: () => t["./users/models/user.model"].User } } }], [import("./auth/models/check-auth.model"), { "CheckAuth": { loggedIn: {} } }], [import("./minio/dto/uploadFile.input"), { "UploadInput": { image: {} } }], [import("./payment/dto/buyRechargePackage.input"), { "BuyRechargePackageInput": { rechargePackageId: {}, receipt: {} } }], [import("./payment/dto/enterCost.input"), { "EnterCostInput": { amount: {}, type: {}, description: { nullable: true } } }], [import("./payment/models/rechargePackage.model"), { "RechargePackage": { amount: {}, discountPercent: {} } }], [import("./payment/dto/purchasePaymentRequest.input"), { "PurchasePaymentRequestInput": { id: { nullable: true }, amount: {}, receipt: { nullable: true } } }], [import("./payment/dto/rechargePaymentRequest.input"), { "RechargePaymentRequestInput": { id: { nullable: true }, amount: {}, profitAmount: { nullable: true }, receipt: { nullable: true } } }], [import("./package/dto/buyPackage.input"), { "BuyPackageInput": { packageId: {}, name: { nullable: true }, receipt: { nullable: true } } }], [import("./package/dto/renewPackage.input"), { "RenewPackageInput": { packageId: {}, userPackageId: { nullable: true }, receipt: { nullable: true } } }], [import("./package/models/userPackage.model"), { "UserPackage": { name: {}, link: {}, remainingTraffic: {}, totalTraffic: {}, expiryTime: {}, lastConnectedAt: { nullable: true } } }], [import("./server/dto/createServer.input"), { "CreateServerInput": { ip: {}, domain: {}, type: {}, inboundId: {} } }], [import("./server/dto/issueCert.input"), { "IssueCertInput": { domain: {} } }], [import("./server/models/server.model"), { "Server": { domain: {}, ip: {}, type: {}, token: {}, inboundId: {} } }], [import("./common/pagination/page-info.model"), { "PageInfo": { endCursor: { nullable: true }, hasNextPage: {}, hasPreviousPage: {}, startCursor: { nullable: true } } }], [import("./common/pagination/pagination.args"), { "PaginationArgs": { skip: { nullable: true, type: () => Number }, after: { nullable: true, type: () => String }, before: { nullable: true, type: () => String }, first: { nullable: true, type: () => Number }, last: { nullable: true, type: () => Number } } }], [import("./payment/models/payment.model"), { "Payment": { amount: {} } }]] } };
};