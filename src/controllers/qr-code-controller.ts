import { Controller } from '@hotwired/stimulus';
import QrCode from 'qrcode';

export default class QrCodeController extends Controller<HTMLImageElement> {
    async initialize() {
        if (this.element.tagName !== 'IMG') {
            throw Error(`QrCodeController controller can only be connected to an image`);
        }

        const url = `${window.location.origin}${window.location.pathname}`
        const qrcode = await QrCode.toDataURL(url);
        console.debug(`QrCode generated for ${url} = '${qrcode}'`);
        this.element.src = qrcode;
    }
} 