import { DeckOfCardsAPICofig } from "../config";
import axios from "axios";
import { toast } from "react-toastify";

const notifyError = (msg: string) => toast.error(msg);

export class DeckOfCardsApi {
	static async newDeck(cards: Array<string>) {
		return axios
			.get(
				`${DeckOfCardsAPICofig.baseURL}deck/new?cards=${cards.toString()}`
			)
			.then((res) => {
				console.log("newDeck response: ", res.data);
				return res.data;
			})
			.catch((error) => {
				notifyError(error.message);
			});
	}

  static async addHandPile(deckId: string, cards: Array<string>) {
		return axios
			.get(
				`${DeckOfCardsAPICofig.baseURL}deck/${deckId}/pile/hand/add?cards=${cards.toString()}`
			)
			.then((res) => {
				console.log("addHandPile response: ", res.data);
				return res.data;
			})
			.catch((error) => {
				notifyError(error.message);
			});
	}

  static async addRotationPile(deckId: number, card: string) {
		return axios
			.get(
				`${DeckOfCardsAPICofig.baseURL}deck/${deckId}/pile/rotation/add?cards=${card}`
			)
			.then((res) => {
				console.log("addRotationPile response: ", res.data);
				return res.data;
			})
			.catch((error) => {
				notifyError(error.message);
			});
	}
}
