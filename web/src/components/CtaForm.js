import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CtaForm({ id, title, subtitle, form }) {
  return (
    <Container id={`#${id}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <Form name={form.name} method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <p className="hidden" style={{ display: 'none' }}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
          </label>
        </p>

        <input type="hidden" name="form-name" value={form.name} />
        {form.formFields.map((input) => {
          const { _type } = input;
          if (_type === 'input') {
            const { _key, inputType, label, name, placeholder, required } = input;
            return (
              <Form.Group controlId={name} key={_key}>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  type={inputType}
                  placeholder={placeholder}
                  required={required}
                  name={name}
                />
              </Form.Group>
            );
          }

          const { _key, label, name, placeholder, required, rows } = input;
          return (
            <Form.Group controlId={name} key={_key}>
              <Form.Label>{label}</Form.Label>
              <Form.Control
                as="textarea"
                rows={rows}
                placeholder={placeholder}
                required={required}
                name={name}
              />
            </Form.Group>
          );
        })}
        <Button type="submit">{form.submit}</Button>
      </Form>
    </Container>
  );
}

CtaForm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
};

CtaForm.defaultProps = {
  subtitle: null,
};

export default CtaForm;
