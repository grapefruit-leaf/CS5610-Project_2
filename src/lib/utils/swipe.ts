import type { Direction } from '@honglinwei/arcade-core';
import type { Attachment } from 'svelte/attachments';

const MIN_DISTANCE = 30;

function swipeDirection(dx: number, dy: number): Direction | null {
  if (Math.max(Math.abs(dx), Math.abs(dy)) < MIN_DISTANCE) return null;
  if (Math.abs(dx) > Math.abs(dy)) return dx > 0 ? 'right' : 'left';
  return dy > 0 ? 'down' : 'up';
}

export function swipe(onswipe: (direction: Direction) => void): Attachment<HTMLElement> {
  return (node) => {
    let start: { x: number; y: number } | null = null;

    function handleDown(event: PointerEvent) {
      if (!event.isPrimary) return;
      start = { x: event.clientX, y: event.clientY };
      node.setPointerCapture(event.pointerId);
    }

    function handleUp(event: PointerEvent) {
      if (!start) return;
      const direction = swipeDirection(event.clientX - start.x, event.clientY - start.y);
      start = null;
      if (direction) onswipe(direction);
    }

    function handleCancel() {
      start = null;
    }

    node.addEventListener('pointerdown', handleDown);
    node.addEventListener('pointerup', handleUp);
    node.addEventListener('pointercancel', handleCancel);

    return () => {
      node.removeEventListener('pointerdown', handleDown);
      node.removeEventListener('pointerup', handleUp);
      node.removeEventListener('pointercancel', handleCancel);
    };
  };
}
