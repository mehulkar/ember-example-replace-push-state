import HistoryLocation from '@ember/routing/history-location';
import { debug } from '@ember/debug';

export default class DebugHistoryLocation extends HistoryLocation {
    pushState(path) {
        debug(`pushState: ${path}`);
        super.pushState(...arguments);
    }

    replaceState(path) {
        debug(`replaceState: ${path}`);
        super.replaceState(...arguments);
    }
}
