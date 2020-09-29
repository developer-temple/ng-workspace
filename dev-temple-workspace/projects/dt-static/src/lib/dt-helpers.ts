export class DTHelpers {
  public static isStringNullOrEmpty(str: string): boolean {
    return str === null || str === undefined || str.trim().length <= 0
  }
}
