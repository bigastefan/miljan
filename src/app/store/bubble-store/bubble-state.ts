import { Action, State, StateContext } from '@ngxs/store';
import { Bubble } from 'src/app/models/bubble';
import { AddBubble, DeleteBubble, AddToUnread, DeleteFromUnread } from './bubble-actions';

export class BubbleStateModel {
    selectedBubbles: Bubble[];
    unreadBubbles: Bubble[];
}

@State<BubbleStateModel>({
    name: 'bubble',
    defaults: {
        selectedBubbles: [],
        unreadBubbles: []
    }
})

export class BubbleState {
    @Action(AddBubble)
    addBubble({ getState, patchState }: StateContext<BubbleStateModel>, { bubble }: AddBubble) {
        const bubbles = getState().selectedBubbles;
        patchState({
            selectedBubbles: [...bubbles, bubble]
        });
    }

    @Action(DeleteBubble)
    deleteBubble({ getState, patchState }: StateContext<BubbleStateModel>, { bubble }: DeleteBubble) {
        const bubbles = getState().selectedBubbles;
        const unread = getState().unreadBubbles;
        const filteredBubbles = bubbles.filter((selecedBubble) => selecedBubble !== bubble);
        const filteredUnread = unread.filter((selectedBubble) => selectedBubble !== bubble);
        patchState({
            selectedBubbles: [...filteredBubbles],
            unreadBubbles: [...filteredUnread]
        });
    }

    @Action(AddToUnread)
    addToUnread({ getState, patchState }: StateContext<BubbleStateModel>, { bubble }: AddToUnread) {
        const bubbles = getState().unreadBubbles;
        patchState({
            unreadBubbles: [...bubbles, bubble]
        });
    }

    @Action(DeleteFromUnread)
    deleteFromUnread({ getState, patchState }: StateContext<BubbleStateModel>, { bubble }: DeleteFromUnread) {
        const bubbles = getState().unreadBubbles;
        const b = bubbles.filter((selectedBubble) => selectedBubble !== bubble);
        patchState({
            unreadBubbles: [...b]
        });
    }

}