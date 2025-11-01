import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as F,a as u,F as p,b as a,c as n,d as m,e as s,f as l,o as f,s as i}from"./form-message-D2FmQxYs.js";import{I as d}from"./input-BZIqaZ19.js";import{T as b}from"./textarea-KprWrt8A.js";import{B as x}from"./button-DQWdcEmz.js";import"./label-CPm00gNi.js";import"./iframe-bW3SthuQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DToCaPBV.js";import"./index-DO-gKF05.js";import"./index-C1bcZ3cK.js";import"./index-ChrwrO0U.js";import"./bundle-mjs-D6B6e0vX.js";import"./icons-CrCLVlP4.js";import"./index-DutoEiXV.js";const h=f({firstName:i().min(2,"First name is required."),email:i().email("Please enter a valid email address."),message:i().min(5,"Message must be at least 5 characters.")}),z={title:"Form",parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>{const o=F({resolver:u(h),defaultValues:{firstName:"",email:"",message:""}}),c=r=>alert(`Submitted:
${JSON.stringify(r,null,2)}`);return e.jsx(p,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(c),className:"space-y-5 w-[20rem]",children:[e.jsx(a,{control:o.control,name:"firstName",render:({field:r})=>e.jsxs(n,{children:[e.jsx(m,{children:"First Name"}),e.jsx(s,{children:e.jsx(d,{placeholder:"John",...r})}),e.jsx(l,{})]})}),e.jsx(a,{control:o.control,name:"email",render:({field:r})=>e.jsxs(n,{children:[e.jsx(m,{children:"Email"}),e.jsx(s,{children:e.jsx(d,{type:"email",placeholder:"you@example.com",...r})}),e.jsx(l,{})]})}),e.jsx(a,{control:o.control,name:"message",render:({field:r})=>e.jsxs(n,{children:[e.jsx(m,{children:"Message"}),e.jsx(s,{children:e.jsx(b,{placeholder:"Write your message...",...r})}),e.jsx(l,{})]})}),e.jsxs(n,{children:[e.jsx(m,{disabled:!0,children:"Disabled Field"}),e.jsx(s,{children:e.jsx(d,{placeholder:"Disabled",disabled:!0})})]}),e.jsx(x,{type:"submit",children:"Submit"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues: {
        firstName: "",
        email: "",
        message: ""
      }
    });
    const onSubmit = (data: z.infer<typeof schema>) =>
    // eslint-disable-next-line no-alert
    alert(\`Submitted:\\n\${JSON.stringify(data, null, 2)}\`);
    return <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-[20rem]">
          <FormField control={form.control} name="firstName" render={({
          field
        }) => <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />

          <FormField control={form.control} name="email" render={({
          field
        }) => <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />

          <FormField control={form.control} name="message" render={({
          field
        }) => <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write your message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />

          <FormItem>
            <FormLabel disabled>Disabled Field</FormLabel>
            <FormControl>
              <Input placeholder="Disabled" disabled />
            </FormControl>
          </FormItem>

          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>;
  }
}`,...t.parameters?.docs?.source}}};const O=["Default"];export{t as Default,O as __namedExportsOrder,z as default};
