import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "./Button";

describe('Button Component', () => {
    it('Renders button with correct text', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', {name: /click me/i})).toBeDefined();
    });
});