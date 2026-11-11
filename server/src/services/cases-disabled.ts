import { forbidden } from "../errors.js";

export const CASES_DISABLED_CODE = "cases_disabled";

/**
 * The denial for any case or workflow operation while the instance has Cases off.
 * It says the denial is final and names the setting, so an agent tells the person
 * and offers the choice instead of creating a task or project in its place.
 */
export function casesDisabledError() {
  return forbidden("Cases are disabled", {
    code: CASES_DISABLED_CODE,
    remediation: "Cases is an experimental feature that is turned off on this instance, and this denial is final: no agent credential, tool or other API route can open, read or enable a case or workflow, so do not search for one. Do not create a task, project or other record in its place before the person chooses. Reply now: tell the person Cases is off, that an instance admin can turn on Cases in [Experimental settings](/<prefix>/company/settings/instance/experimental) (use this conversation's company prefix), and offer to track the request as an ordinary task instead.",
  });
}
