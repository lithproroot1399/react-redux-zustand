import { describe, it } from 'vitest';

describe('zustend store', () => {
    it('should be able to play', () => {
        const state = reducer(exampleState, play([1, 2]))
    
        expect(state.currentModuleIndex).toEqual(1)
        expect(state.currentLessonIndex).toEqual(2)
    })
})