import { Controller } from '@hotwired/stimulus';

const DARK_MODE_KEY = 'dark_mode';

enum Mode {
    DARK = 'dark',
    LIGHT = 'light'
};

function fromValue(mode: string | null) {
    if (mode == Mode.DARK) return Mode.DARK;
    if (mode == Mode.LIGHT) return Mode.LIGHT;
    return null;
}

export default class DarkModeController extends Controller<HTMLElement> {    
    static targets = [ "darkIcon", "lightIcon" ]

    declare readonly hasDarkIconTarget: boolean;
    declare readonly darkIconTarget: HTMLInputElement;
    declare readonly darkIconTargets: HTMLInputElement[];
    declare readonly hasLightIconTarget: boolean;
    declare readonly lightIconTarget: HTMLInputElement;
    declare readonly lightIconTargets: HTMLInputElement[];

    prefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentMode: Mode = this.getMode()

    initialize() {        
        console.debug(`User ${this.prefersDark ? 'prefers' : 'does not prefer'} dark mode.`);
        console.debug(`Currently saved setting is ${this.currentMode}`);
        this.setIcons();
    }

    connect() {
        if (!this.element.classList.contains(this.currentMode)) {
            this.element.classList.add(this.currentMode);
        } 
    }

    setIcons() {
        this.darkIconTargets.forEach(d => d.style.display = (this.currentMode === Mode.LIGHT ? 'none' : 'block'));
        this.lightIconTargets.forEach(d => d.style.display = (this.currentMode === Mode.DARK  ? 'none' : 'block'));
    }

    toggle() {
        const originalMode = this.currentMode;

        if (this.currentMode == Mode.DARK) {
            this.currentMode = this.saveMode(Mode.LIGHT);
        } else if (this.currentMode == Mode.LIGHT) {
            this.currentMode = this.prefersDark 
                ? this.removeMode(Mode.DARK) : this.saveMode(Mode.DARK);
        }

        console.debug(`Toggling mode from ${originalMode} to ${this.currentMode}`);   
        this.element.classList.replace(originalMode, this.currentMode);
        this.setIcons();
    }

    getMode(): Mode {;        
        return fromValue(localStorage.getItem(DARK_MODE_KEY)) || (this.prefersDark ? Mode.DARK : Mode.LIGHT);
    }

    saveMode(mode: Mode): Mode {
        localStorage.setItem(DARK_MODE_KEY, mode);
        return mode;
    }

    removeMode(mode: Mode): Mode {
        localStorage.removeItem(DARK_MODE_KEY);
        return mode;
    }
}