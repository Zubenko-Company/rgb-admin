import { RuleType } from '../../models/all.js';

export class RulePrettify {
	public static prettify(rule: RuleType) {
		return `*${rule.name}*\n\n✅${rule.correctWay}\n\n❌${rule.incorrectWay}`;
	}
}
