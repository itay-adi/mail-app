import { AbstractControl, ValidationErrors } from "@angular/forms";

export function maxLettersValidators(maxLetters: number): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl) => {
        if(controlValidator(control)) return null;
        
        let words = String(control.value).replace(" ", "");

        if(words.length <= maxLetters) return null;

        return {
            'maxLetters': {
                actual: words.length,
                maximum: maxLetters
            }
        };
    }
}

function controlValidator(control: AbstractControl): boolean {
    if (!control) return true;
    if (!control.value) return true;
    if (typeof(control.value) !== 'string') return true;

    return false;
}